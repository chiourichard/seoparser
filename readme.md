# Seoparser

# Brief Description

A command line mode seo parser tool for html

# Install

```
$npm i seoparser
```

## Starting the terminal

Help Info

```
$bin/seoparser -h

--file=filepath: Detect file input
 -a: Detect if any <img /> tag without alt attribute
 -b: Detect if any <a /> tag without rel attribute
 -c: In <head> tag
    i. Detect if header doesn’t have <title> tag
    ii. Detect if header doesn’t have <meta name=“descriptions” ... /> tag
    iii. Detect if header doesn’t have <meta name=“keywords” ... /> tag
 -d num: Detect if there’re more than 15 <strong> tag in HTML (15 is a value should be configurable by user)
 -e: Detect if a HTML have more than one <H1> tag.
```

## example

```
$bin/seoparser -c -a  -b -d  -e  --file=test2.html

There is no <meta name=“keywords” ... /> tag in header
There are 16 <img> tag without alt attribute
There are 47 <a> tag without rel attribute
This HTML have more than true <strong> tag
This HTML have more than one <h1> tag
```
