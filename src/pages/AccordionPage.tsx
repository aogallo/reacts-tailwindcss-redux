import Accordion from '../components/Accordion'

function AccordionPage() {
  const items = [
    {
      id: '12',
      label: 'Can I use React on a project',
      content:
        'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    },
    {
      id: '15',
      label: 'PS5 - Havik - MK1',
      content:
        'Havik first appeared in Mortal Kombat Deception and he makes his return as a playable character in MK1. He’s the one character in the base game roster you need to unlock. To unlock Havik you need to complete the story mode.',
    },
    {
      id: '20',
      label: 'PS5 - JP - SF6',
      content:
        "Head of an international NGO responsible for many successful investment projects, and the man behind Nayshall's present prosperity. Has a beloved cat named Cybele.",
    },
  ]

  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default AccordionPage
