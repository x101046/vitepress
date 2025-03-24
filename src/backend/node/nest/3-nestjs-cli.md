# Nestjs cli

## 通过cli创建nestjs项目

```bash
npm i -g @nestjs/cli
nest new [项目名称]
```

## cli命令行
<NImage src="./assets/3-cli.png"/>
常用命令
```bash
# 生成的目录是当前目录的src目录下
# 想要切换路径可根据相对路径切换 例：
nest g res ./module/user

# 常用
nest g res 名称 # 生成CRUD模板
```

<script setup>
import { NImage} from 'naive-ui'
</script>
