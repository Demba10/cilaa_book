export class User {

    constructor(
        private nom: string,
        private adresse: string,
        private telephone: string,
        private statut: string,
        private role_id: number,
        private password: string,
        private email: string,
    ) { }
}