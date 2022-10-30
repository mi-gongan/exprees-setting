# express+sequezlize 기본 setting

## 환경세팅

### 기본 package 설치

```
npm install express nodemon dotenv cors morgan helmet mysql2 sequelize
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

: HTTP request logger middleware = HTTP 요청에 대한 log를 남겨주는 미들웨어입니다.
: 자세한 정보는 사용목적에 따라 document 확인

## MVC 패턴 사용하기

:router와 controller 폴더를 참고하여 VC를 분리
