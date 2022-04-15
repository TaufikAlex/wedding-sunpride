import bride from '../../assets/ic-bride.png'
import groom from '../../assets/ic-groom.png'


const DataBrideGroom = ({ wedding }) => {

  const data = [
    {
      img: bride,
      title: 'The Bride',
      name: wedding.ladies,
      description: wedding.childLadies,
      parent: wedding.parentNameLadies,
    },
    {
      img: groom,
      title: 'The Groom',
      name: wedding.man,
      description: wedding.childMan,
      parent: wedding.parentNameMan,
    },
  ]
  return { data }
}

export default DataBrideGroom



