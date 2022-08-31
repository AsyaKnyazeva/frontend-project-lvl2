### Hexlet tests and linter status:
[![Actions Status](https://github.com/AsyaKnyazeva/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/AsyaKnyazeva/frontend-project-lvl2/actions)
###
[![Github actions](https://github.com/AsyaKnyazeva/frontend-project-lvl2/actions/workflows/actions.yml/badge.svg)](https://github.com/AsyaKnyazeva/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/52d133538dd7679f1bb1/maintainability)](https://codeclimate.com/github/AsyaKnyazeva/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/52d133538dd7679f1bb1/test_coverage)](https://codeclimate.com/github/AsyaKnyazeva/frontend-project-lvl2/test_coverage)

## Знакомство с программой "Вычислитель отличий" :  

"Вычислитель отличий" принимает на вход два файла одинакового формата: JSON, YAML(YML) и после имплементации возвращает разницу 
в одном из трех стилей:
```
'stylish' — когда сравнение будет производиться построчно и все отличия первого файла от второго будут промаркированы "+" или "-".  
'plain' — текстовое описание атрибутов в формате что и куда добавилось/изменилось/удалилось.  
'json' — перевод разницы между файлами в формат JSON.
```


## Запуск программы:  

В общем виде схема запуска выглядит следующим образом:
```
gendiff filepath1 filepath2
```
где:
    
gendiff — быстрая команда для сравнения файла  
filepath1 — путь к первому файлу, который вы хотите сравнить.  
filepath2 — путь ко второму файлу, с которым проводится сравнение.  

Файлы для сравнения для удобства помещены в папку фикстур и в коде данный момент не зашит,
поэтому необходимо при запуске указывать папку, в которой лежит файл:
```
./__fixtures__/file1.json
``` 
  С учетом уточнения файловых путей наша команда для запуска "Вычислитель отличий" должна выглядеть так:
```
gendiff ./__fixtures__/file1.json ./__fixtures__/file2.json
```
  
## Стиль:

По умолчанию стиль вывода - 'stylish', поэтому два варианта вызова, указанных ниже - эквивалентны.
```
gendiff ./__fixtures__/file1.json ./__fixtures__/file2.json
gendiff --format stylish ./__fixtures__/file1.json ./__fixtures__/file2.json
```

Вывод в формате 'plain':
```
gendiff --format 'plain' ./__fixtures__/file1.json ./__fixtures__/file2.json
```

Вывод в формате 'json':
```
gendiff --format 'json' ./__fixtures__/file1.json ./__fixtures__/file2.json
``` 

### Сравнение плоского JSON.
 https://asciinema.org/a/EC3nf6DW9QXlvUXuUhBevgIKc


### Сравнение неплоского JSON
  https://asciinema.org/a/fj4EqO1JE7TdiyWraDf9i5sKk



### Сравнение JSON и YAML в форматах plain и stylish
https://asciinema.org/a/d7ZFTq8Ho98y5GcJuxE3B9myw



### Сравнение JSON и YAML в форматe JSON
https://asciinema.org/a/yMapirNQy2Db1aItU0q3J6C6l


  
  
  
