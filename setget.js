class person {
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
        this.nickname = "";
    }
    set nicknames(value){
        this.nickname = value;
        console.log(this.nickname)
    }
    get nicknames(){
        console.log(`your nickname is ${this.nickname}`);
    }
}
    const sonu = new person("sonu","yadav")
    sonu.nicknames = "so";
    sonu.nicknames;