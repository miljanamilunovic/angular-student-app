export class Student {
    
        id:string;
        ime: string;
        prezime: string;
        brojIndeksa: string;
        datumRodjenja:string;
        grad: string;
        ulica:string;

        constructor(id: string, name: string, surname: string, indeks: string, born:
            string, city: string, street: string) {
             this.id = id,
             this.ime = name,
             this.prezime = surname,
             this.brojIndeksa = indeks,
             this.datumRodjenja = born,
             this.grad = city,
             this.ulica = street         
         }

} 
