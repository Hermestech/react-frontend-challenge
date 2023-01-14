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

export const CharacterByNameQuery = `
query charactersByName($input: Int!, $name: String) {
  characters(page: $input, filter: { name: $name }) {
    info {
      count
    }
    results {
      ...characterFields
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}
${CharacterFragment}
`