## 添加 root 权限用户

1. 添加用户

```bash
adduser admin
passwd  admin
```

2. 添加 root 权限

修改 `/etc/sudoers`

```yml
## Allow root to run any commands anywhere
root    ALL=(ALL)     ALL
admin   ALL=(ALL)     ALL
```

## 禁用 root 远程登录

修改 `/etc/ssh/sshd_config`

```yml
PermitRootLogin no
```

