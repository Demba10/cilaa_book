export class Projet {

    constructor(
        private titre: string,
        private description: string,
        private statut: string,
        private image: string,
        private categorie_id: number,
        private user_id: number
    ) { }
}