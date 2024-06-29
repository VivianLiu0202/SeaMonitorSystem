# coding=utf-8
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# 指定ChromeDriver的路径
driver = webdriver.Chrome('/path/to/chromedriver')

# 打开网页
driver.get("http://www.google.com")

# 找到搜索框，输入内容并提交
elem = driver.find_element_by_name("q")
elem.clear()
elem.send_keys("OpenAI")
elem.send_keys(Keys.RETURN)

# 确保页面已加载完毕
assert "No results found." not in driver.page_source

# 关闭浏览器
driver.close()