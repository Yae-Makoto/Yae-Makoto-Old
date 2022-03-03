# Publish React App to Github Page with Custom Apex Domain

## *Step I*

Add `A` record to your domain's DNS record with `target` = 
~~~
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
~~~

## *Step II*

1. Go to Github Repository settings, click `Pages`.
2. Under `Custom Domain`, paste [domain].

## *Step III*

In Git Bash, do

~~~
dig yae-makoto.tk +noall +answer -t A
~~~

## *Step IV*

In your react repository, change the `package.json` with

~~~
...
"homepage": "https://yae-makoto.tk/"
...
"scripts": {
        ...
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
},
...
~~~

## *Step V*

Commit and push.

## *Step VI*

In your terminal, do

~~~
npm run deploy
~~~

