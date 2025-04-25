## 搭建开发环境

### 1. 操作系统

- Windows 10
- Windows 11

不支持的系统：

- Windows 7 安装不了 Node.JS 22

### 2. 环境管理器

#### 【选项1】fnm 1.38.1


#### 【选项2】nvm 1.1.12


#### 3. Node 版本：v22.15.0(LTS)

```cmd
nvm install 22
nvm use 22
```

#### 4. 包管理器：yarn 1.22.22

```cmd
npm install -g yarn
```

### 5. Electron 版本：35.2.1

#### Electron 打包器：Electron-builder 26.0.12

windows 版打包采用 NSIS 工具

### 6. IDE：VS Code

#### VS Code 插件

无

## 开发命令

### 1. 初始化命令行环境

fmn环境管理器下：

```cmd
init_fnm.bat
```

其它环境下：

```cmd
init_proxy.bat
```

### 2. 下载 node_modules 资源文件

11 代 i3 win 11 执行该步骤用了 671 秒。

```cmd
yarn
```

node_modules 目录体积 552 M。

### 3. 预构建

第一次执行时会下载 electron-builder 打包用的缓存资源。

11 代 i3 win 11 第一次执行该步骤用了 107 秒；后续执行只需要 6 秒。

```cmd
yarn run prebuild
```

构建 windows 安装包的部分预构建缓存 282 M。

### 4. 打包发行

11 代 13 win 11 执行该步骤用了 50 秒。

```cmd
yarn run build
```

windows 安装包体积 81 M。


## Icons

[皇冠 logo](https://icon-icons.com/zh/%E5%9B%BE%E6%A0%87/%E8%B4%B5%E5%AE%BE-%E7%9A%87%E5%86%A0-%E7%8F%A0%E5%AE%9D-%E5%9B%BD%E7%8E%8B-%E5%A5%B3%E7%8E%8B/263918)