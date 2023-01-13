import { CharacterFragment } from "./fragments/fragments"

export const CharacterListQuery = `
query ($input: Int!) {
    characters(page: $input) {
      info{
        pages
      }
      results{
        ...characterFields
      }
    }
  }
  ${CharacterFragment}
`