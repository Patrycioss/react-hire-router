import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people, onClick } = props

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} onClick={onClick} />
      ))}
    </ul>
  )
}

export default PeopleList
