import torch
import cv2
import numpy as np
from extra.models.experimental import attempt_load
from extra.utils.datasets import letterbox
from extra.utils.plots import plot_one_box
from extra.utils.torch_utils import select_device
from extra.utils.general import check_img_size, check_imshow, non_max_suppression, apply_classifier,scale_coords
import os
import sys

current_dir = os.path.dirname(os.path.abspath(__file__))

# 将当前目录添加到 Python 模块搜索路径
sys.path.append(current_dir)
def detect_single_image(img, img_size=640, conf_thres=0.25, iou_thres=0.45):
    # Initialize
    device = select_device('cpu')
    weights='/Users/hubocheng/coding/pycoding/ruangong_2/SeaMonitorSystem/extra/weight&sample/best.pt'

    # Load model
    model = attempt_load(weights, map_location=device)  # load FP32 model
    stride = int(model.stride.max())  # model stride
    img_size = check_img_size(img_size, s=stride)  # check img_size

    # Preprocess image
    img0 = img.copy()
    img = letterbox(img, img_size, stride=stride)[0]
    img = img[:, :, ::-1].transpose(2, 0, 1)  # BGR to RGB, to 3x416x416
    img = np.ascontiguousarray(img)

    img = torch.from_numpy(img).to(device)
    img = img.float()  # Ensure float32
    img /= 255.0  # 0 - 255 to 0.0 - 1.0
    if img.ndimension() == 3:
        img = img.unsqueeze(0)

    # Inference
    with torch.no_grad():   # Calculating gradients would cause a GPU memory leak
        pred = model(img)[0]

    # Apply NMS
    pred = non_max_suppression(pred, conf_thres, iou_thres, classes=None, agnostic=False)

    # Process detections
    names = model.module.names if hasattr(model, 'module') else model.names
    colors = [[0, 255, 0]]  # Define color for bounding boxes

    for i, det in enumerate(pred):  # detections per image
        if len(det):
            # Rescale boxes from img_size to img0 size
            det[:, :4] = scale_coords(img.shape[2:], det[:, :4], img0.shape).round()

            # Write results
            for *xyxy, conf, cls in reversed(det):
                label = f'{names[int(cls)]} {conf:.2f}'
                print('cls:', cls,"type:",type(cls))
                print('len colors:',len(colors))
                plot_one_box(xyxy, img0, label=label, color=colors[0], line_thickness=1)
    cv2.imwrite('/Users/hubocheng/Downloads/testshow.jpg', img0)
    return img0

# Example usage:
from PIL import Image
# img = cv2.imread('/Users/hubocheng/coding/pycoding/yolov7_fish_project/data/Samples/1.jpg')  # Load image using OpenCV or any other library
# result_img = detect_single_image(img)
# cv2.imshow('Result', result_img)
# cv2.imwrite('/Users/hubocheng/Downloads/testshow.jpg', result_img)
# cv2.waitKey(0)
# cv2.destroyAllWindows()
