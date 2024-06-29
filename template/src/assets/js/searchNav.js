document.querySelector('.form-inline.search').addEventListener('submit', function(e) {
    e.preventDefault(); // 阻止表单默认提交行为
    var searchText = document.querySelector('.search-form-control').value.trim();
    if (!searchText) {
        alert('请输入搜索内容');
        return;
    }
    if (!window.find(searchText)) {
        alert('没有找到匹配的内容');
    }
});

// 关闭搜索框
document.querySelector('.feather-x.search-close').addEventListener('click', function() {
    document.querySelector('.search-form-control').value = '';
    // 可以添加更多关闭搜索框的逻辑
});

//实现快捷键（如 Ctrl + /）直接聚焦到搜索框
document.addEventListener('keydown', function(event) {
    // 检查是否同时按下了 Ctrl 键和斜杠（'/'）键
    if (event.ctrlKey && event.key === '/') {
        event.preventDefault();  // 阻止默认行为
        // 将焦点设置到搜索框
        document.querySelector('.search-form-control').focus();
    }
});