function log_string(str)
{
    console.log(str);
}

log_string(`Hello, Isael!`);
log_string(`Hello, Amy!`);

function happy_or_sad(bool)
{
    if(bool === true)
    {
        console.log(`Happy!`);
    }
    else if (bool === false)
    {
        console.log(`Sad!`);
    } else {
        console.log(`Not a boolean!`);
    }
}

happy_or_sad(true);
happy_or_sad(false);
happy_or_sad(`something else`)

function largest_number(arr)
{
    let num = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(num < arr[i])
        {
            num = arr[i];
        }
    }
    return num;
}

let my_array = largest_number([1, 34, 4, 6, 78, 345]);

function pop_happy(arr)
{
    for(let i = arr.length - 1; i >= 0; i--)
    {
        if(arr[i].includes(`happy`))
        {
            return arr;
        }
        else
        {
            arr.pop();
        }
    }
}

let contains_happy = pop_happy([`gfsag`, `gadfga`, `adfgad`, `happy`, `24562`, `245624`,]);