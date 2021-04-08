## Terribly Tiny Tales - String Shortner Assignment

[Demo Link](https://vaidikkamde.github.io/ttt-assignment-string-shortner/)

### About The Project

This project is an implementation of string shortner which takes a string as an input and encodes it in a string of smaller length than the orignal string. This project also contains a reverse implementation which converts the encoded string back to the orignal text.

#### How Does It Works ?

The algorithm first takes the string input from the user. Then it genrates a random number from 1(including) to length of string(excluding) _ie._ [1,length). Then the algorithm genreates a random alphanumeric string of the length equal to the random number generated above and maps the orignal string to this random string and return this random string as an output.
While decoding the alogrithm searches for the shorten string in the map and if it finds it then returns the orignal string mapped to it.

### Implementation

##### Encoding

```
PROGRAM GENERATE SHORTEN STRING :
1 Intalize shortMap and longMap
2 long = Orignal String
3 Check if a existing shortend String is present if True then return the shortenString
4 Else intalize len = length of orignal string-1
5 Generate a random number between 1 and len
6 Generate a random string of length of genereated random number and intalize it to short.
7 Map the short string to orignal string in longMap
8 Map the orignal string to short string in shortMap
9 Return short
END
```

##### Decoding

```
PROGRAM GET ORIGNAL STRING
1 Get shorten string from user and intialize it to short.
2 Check the shortMap for the key == short
3 If key is found return the value for the key
4 Else return 'orignal text not found'
END
```
