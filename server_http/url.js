const myURL= new URL('https://www.google.com/test?data=Daniel&data2=hi&data3=world')
console.log(myURL.hostname);
console.log(myURL.pathname);
console.log(myURL.searchParams);
console.log(typeof(myURL.searchParams));
console.log(myURL.searchParams.get('data'));
console.log('------------------------------------');
myURL.searchParams.forEach(element => {
    console.log(element);
});