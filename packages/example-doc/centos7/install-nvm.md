1. 安装 git
```bash
yum install -y git
```

2. 下载 NVM 源码并检查最新版本
```bash
git clone git://github.com/cnpm/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
```

3. 配置环境变量
```bash
echo "source ~/nvm/nvm.sh" >> ~/.bashrc
source ~/.bashrc
```

4. nvm 操作
```bash
# 查看版本
nvm list-remote
# 安装
nvm install v16.13.0
# 查看已安装的 Node.js 版本
nvm ls
```
