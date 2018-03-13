var arrayBooks = [
    {
        title : 'Lean In: Women, Work, and the Will to Lead',
        author : 'Sheryl Sandberg',
        alreadyRead : false
    },
    {
        title : 'Option B: Facing Adversity, Building Resilience, and Finding Joy',
        author : 'Sheryl Sandberg',
        alreadyRead : true
    },
    {
        title : 'Outliers: The Story of Success',
        author : 'Malcolm Gladwell',
        alreadyRead : true
    }
];

for (i = 0; i < arrayBooks.length; i++) {
    //console.log(arrayBooks[i].title + ' by ' + arrayBooks[i].author);
    if (arrayBooks[i].alreadyRead) {
        console.log('You already read "' + arrayBooks[i].title + '" by ' + arrayBooks[i].author + '.\n');
    } else {
        console.log('You still need to read "' + arrayBooks[i].title + '" by ' + arrayBooks[i].author + '.\n');
    }
}
