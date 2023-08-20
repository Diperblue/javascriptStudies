function invertStr(str) {
    (inistr=str,retur='')
    const invst = () => str!=inistr[inistr.length-1] ? (console.log(retur), retur[retur.length+1]=invst(str[str.length-1])) : retur
    return retur
}
console.log(invertStr('teste'))
