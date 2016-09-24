var METHOD = {};
METHOD.xiaoming = {
    name : '张晓明',
    birth : 1993,
    age : function(){
        var now = new Date().getFullYear();
        return now - this.birth;
    }
};