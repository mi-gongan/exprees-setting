# express db socket 기본 setting

## 환경세팅

```
npm int
```

### 기본 package 설치

```
npm install express nodemon dotenv cors morgan helmet
```

- sql

```
npm install mysql2 sequelize
```

- nosql

```
npm install mongoose
```

- socket

```
npm install socket.io
```

## 기본 세팅

### prettier+eslint (airbnb style guide)

: 프로젝트 팀원들 간의 통일성 있는 코드를 작성하기 위함

- eslint 와 prettier extensions를 설치하고 아래의 패키지를 설치해준다

```
npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier
```

```
npx install-peerdeps --dev eslint-config-airbnb
```

- .eslintrc 작성

```
{
  "extends": ["airbnb", "plugin:prettier/recommended"],
  "rules": {
    "prettier/prettier": ["error"]
  }
}
```

- .prettierrc 작성

```
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "proseWrap": "never",
  "endOfLine": "auto"
}
```

- setting.json 설정

```
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": true
  }
}
```

### nodemon 세팅

: package.json에서 scripts에 nodemon을 세팅해준다

```
"dev": "nodemon app.js"
```

### dotenv 설정

: config.js 파일을 참고하여 dotenv 설정과 .env 파일 생성 (더 효과적으로 환경변수를 세팅하기 위해)

### .gitignore

: .gitignore 파일 추가 및 .env 추가

## 미들웨어

### cors 설정

```
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
```

### body-parser : 4x 이후부터는 express에 내장

: api 요청에서 받은 body 값을 파싱하는 역할을 수행

```
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

### static 미들웨어

```
app.use(express.static("public"));
```

### helmet

: 헤더의 설정을 통하여 웹 취약점으로부터 서버를 보호해주는 보안 모듈

```
app.use(helmet())
```

### morgan

: HTTP request logger middleware = HTTP 요청에 대한 log를 남겨주는 미들웨어입니다. : 자세한 정보는 사용목적에 따라 document 확인

## db setting

### sequalize

:database 보고 세팅

## MVC 패턴 사용하기

:router와 controller 폴더를 참고하여 VC를 분리
