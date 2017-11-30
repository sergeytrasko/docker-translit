# docker-translit

RESTful API for transliteration

Based on [lingua-translit](https://www.netzum-sorglos.de/software/lingua-translit/)

## Prerequisites

- Docker

## Run it

```
docker-compose up --build
```

It will start a HTTP server listening to port 3000

## Getting list of all possible transliterations

```
GET http://localhost:3000/options
```

## Transliterate

```
GET http://localhost:3000?option=Common DEU&text=ä ö ü
```

Output will be

```
ae oe ue
```