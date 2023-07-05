## 切换 root

## 更新 yum 源

见 `../yum/update-yum-source.md`

## 卸载 mariadb

```bash
# 列出所有被安装的rpm package
rpm -qa | grep mariadb
# 卸载
rpm -e mariadb-******
```

## 安装仓库

```bash
curl -sSLO https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
rpm -ivh mysql57-community-release-el7-11.noarch.rpm
```

## 添加公钥

```bash
rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
```

## 安装

```bash
yum -y install mysql-community-server
```

## 初始化设置

```bash
mysql -u root
# 如果报错 `Can‘t connect to local MySQL server through socket '/var/lib/mysql/mysql.sock'`, 需要修改 `/var/lib/mysql` 的访问权限
# chown -R root:root /var/lib/mysql
# 重启服务
systemctl restart mysqld
# 查看临时密码
sudo grep 'temporary password' /var/log/mysqld.log
# 重置密码 -> 删除匿名用户 -> 禁止远程root登录 -> 删除测试库 -> 重载权限表
mysql_secure_installation
```

## 添加用户

```bash
# 允许远程登录
create user 'dervean'@'%' identified by '${password}'
# 只允许本地登录
create user 'dervean'@'localhost' identified by '${password}'
```

## 开机启动

```bash
systemctl enable mysqld
```

## 更改语言为 utf8

```bash
mysql> status
--------------
mysql  Ver 14.14 Distrib 5.7.37, for Linux (x86_64) using  EditLine wrapper

Connection id:		20
Current database:
Current user:		root@localhost
SSL:			Not in use
Current pager:		stdout
Using outfile:		''
Using delimiter:	;
Server version:		5.7.37 MySQL Community Server (GPL)
Protocol version:	10
Connection:		Localhost via UNIX socket
Server characterset:	latin1                  <---------------
Db     characterset:	latin1                  <---------------
Client characterset:	utf8
Conn.  characterset:	utf8
UNIX socket:		/var/lib/mysql/mysql.sock
Uptime:			1 hour 55 min 42 sec

Threads: 2  Questions: 75  Slow queries: 0  Opens: 146  Flush tables: 1  Open tables: 139  Queries per second avg: 0.010
```

```bash
vi /etc/my.cnf
--------------
# For advice on how to change settings please see
# http://dev.mysql.com/doc/refman/5.7/en/server-configuration-defaults.html

[client]                                        <---------------
default-character-set=utf8                      <---------------

[mysqld]
#
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M
#
# Remove leading # to turn on a very important data integrity option: logging
# changes to the binary log between backups.
# log_bin
#
# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock
character-set-server=utf8                       <---------------
collation-server=utf8_general_ci                <---------------

# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0

log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
```

