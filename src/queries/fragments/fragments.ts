export const CharacterFragment = `
    fragment characterFields on Character {
        id
        name
        image
        status
        species
        origin {
            name
            created
        }
    }
`