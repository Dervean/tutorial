## 开放端口

```bash
firewall-cmd --zone=public --add-port=6379/tcp --permanent

firewall-cmd --reload

firewall-cmd --query-port=6379/tcp
```