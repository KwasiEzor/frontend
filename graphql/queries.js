import { gql } from "@apollo/client";

// Query  to get all agendas

export const GET_ALL_AGENDAS = gql`
  query {
    agendas {
      id
      event
      event_date
      event_time
      event_place
      description
      sc_classics {
        id
        name
        description
      }
      sc_duplicates {
        id
        name
        description
      }
      competitions {
        id
        name
        description
      }
    }
  }
`;
// Query to get index page post

export const GET_INDEX_DATA = gql`
  query {
    agendas {
      id
      event
      event_date
      event_time
      event_place
      description
      sc_classics {
        id
        name
        description
      }
      sc_duplicates {
        id
        name
        description
      }
      competitions {
        id
        name
        description
      }
    }
    posts(limit: 3) {
      id
      slug
      author
      released_date
      content
      post_image {
        previewUrl
        url
      }
      p_categories {
        id
        name
      }
    }
  }
`;
export const GET_SCRABBLE_GAMES_WITH_RESULTS = gql`
  query {
    scGames {
      id
      sc_gm_round {
        id
        letterSelection
        wordSelected
        wordSelectedRef
        score
        comments
        round_solo {
          soloWord
          soloRef
          soloScore
          plyName
        }
      }
      sc_gm_result {
        nbPlayers
        nbScRounds
        nbSolos
        nbSoloOrdi
        nbSoloPlayer
        totalScore
        gameReferee
        comments
        gm_results {
          id
          plyRanking
          plyScore
          percentage
          plyName
        }
        sc_duplicate {
          name
          description
        }
        competition {
          name
        }
      }
    }
  }
`;

export const GET_ALL_SCRABBLE_MEMBERS = gql`
  query {
    members {
      id
      firstname
      lastname
      email
      country
      arrival_year
      profile_img {
        url
      }
    }
  }
`;
export const GET_ALL_ORGANIGRAMS = gql`
  query {
    organigrams {
      branch {
        id
        office {
          id
          mandat_start
          mandat_end
          member_role {
            id
            role
          }
          member {
            id
            firstname
            lastname
          }
        }
        committee {
          id
          member_role {
            id
            role
          }
          member {
            id
            firstname
            lastname
          }
        }
      }
    }
  }
`;
export const GET_BLOG_POSTS = gql`
  query {
    posts {
      id
      slug
      author
      released_date
      content
      post_image {
        previewUrl
        url
      }
      p_categories {
        id
        name
      }
      p_comments {
        content
        members {
          id
          firstname
          lastname
        }
      }
    }
  }
`;
export default {
  GET_ALL_AGENDAS,
  GET_BLOG_POSTS,
  GET_INDEX_DATA,
  GET_SCRABBLE_GAMES_WITH_RESULTS,
  GET_ALL_ORGANIGRAMS,
};
