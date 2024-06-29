# 软件工程大作业说明
最好在浏览器无痕模式下打开网站。
### 创建虚拟环境
在项目的根目录下执行，注意先要修改yaml文件中的prefix路径为自己本地的路径
```bash
conda env create -f ruangong.yaml
```
```yml
# 修改路径，或者省略prefix行，让Conda自动选择一个安装路径。
prefix: /Users/liuvivian/anaconda3/envs/system
```
### 数据库迁移
先修改`SeaMonitorSystem/settings.py`中的数据库配置
```python
# 把NAME和PASSWORD改为自己的数据库名和密码
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'SeaSystem',
        'USER': 'root',
        'PASSWORD': 'root',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}
```
找到`SeaSystem.sql`文件，导入到数据库中，

然后在根目录下执行以下命令
```bash
python manage.py makemigrations
python manage.py migrate
```
### 导入数据
本组数据上传基本都使用Django的自定义命令，主要有以下几个：
```bash
//underwater
python manage.py insert_data
python manage.py import_json 文件路径

//datacenter
python manage.py insert_data_ohio

//maininfo
python manage.py import_water_data 文件路径

//intelligent
python manage.py import_data
```
这些命令可以将数据集读入数据库

### 运行项目

在项目的根目录下执行
```bash
python manage.py runserver
```
然后在浏览器中输入 `http://127.0.0.1:8000/` 即可访问
