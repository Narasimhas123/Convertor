"use strict"

function convert()
{
    var inputNum  = document.getElementById("ipNum").value;
    var iType = document.getElementById("ipType").value;
    var oType = document.getElementById("opType").value;
    var oNum;
    
    //conversion from binary to oct, dec, hex
    if(iType=="ipbin" && oType=="opdec") oNum = bin2dec(inputNum);
    if(iType=="ipbin" && oType=="opoct") oNum = bin2oct(inputNum);
    if(iType=="ipbin" && oType=="ophex") oNum = bin2hex(inputNum);
    if(iType=="ipbin" && oType=="opbin") oNum = "INVALID";
    //conversion from decimal to bin, oct, hex
    if(iType=="ipdec" && oType=="opbin") oNum = dec2bin(inputNum);
    if(iType=="ipdec" && oType=="opoct") oNum = dec2oct(inputNum);
    if(iType=="ipdec" && oType=="ophex") oNum = dec2hex(inputNum);
    if(iType=="ipdec" && oType=="opdec") oNum = "INVALID";
    //conversion from octal to bin, dec, hex
    if(iType=="ipoct" && oType=="opbin") oNum = oct2bin(inputNum);
    if(iType=="ipoct" && oType=="opdec") oNum = oct2dec(inputNum);
    if(iType=="ipoct" && oType=="ophex") oNum = oct2hex(inputNum);
    if(iType=="ipoct" && oType=="opoct") oNum = "INVALID";
    //conversion from hexadecimal to bin, dec, oct
    if(iType=="iphex" && oType=="opbin") oNum = hex2bin(inputNum);
    if(iType=="iphex" && oType=="opoct") oNum = hex2oct(inputNum);
    if(iType=="iphex" && oType=="opdec") oNum = hex2dec(inputNum);
    if(iType=="iphex" && oType=="ophex") oNum = "INVALID";

    document.getElementById("opNum").innerHTML=oNum;
    
}



//function binary to decimal conversion
function bin2dec(inputNum)
{
    return parseInt(inputNum, 2);
}
//function binary to octal conversion
function bin2oct(inputNum)
{
    return parseInt(inputNum, 2).toString(8);
}
//function binary to hexadecimal conversion
function bin2hex(inputNum)
{
    return parseInt(inputNum, 2).toString(16);
}


//function decimal to binary conversion
function dec2bin(inputNum)
{
    return parseInt(inputNum).toString(2);
}
//function decimal to octal conversion
function dec2oct(inputNum)
{
    return parseInt(inputNum).toString(8);
}
//function decimal to hexadecimal conversion
function dec2hex(inputNum)
{
    return parseInt(inputNum).toString(16);
}


//function octal to binary conversion
function oct2bin(inputNum)
{
    return parseInt(inputNum, 8).toString(2);
}
//function octal to decimal conversion
function oct2dec(inputNum)
{
    return parseInt(inputNum, 8).toString(10);
}
//function octal to hexadecimal conversion
function oct2hex(inputNum)
{
    return parseInt(inputNum, 8).toString(16);
}


//function hexadecimal to binary conversion
function hex2bin(inputNum)
{
    return parseInt(inputNum, 16).toString(2);
}
//function hexadecimal to octal conversion
function hex2oct(inputNum)
{
    return parseInt(inputNum, 16).toString(8);
}
//function hexadecimal to decimal conversion
function hex2dec(inputNum)
{
    return parseInt(inputNum, 16).toString(10);
}

