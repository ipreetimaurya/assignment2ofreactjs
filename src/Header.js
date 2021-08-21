import React from 'react'
import Cards from './Cards'
import london from './image/london.jpg'
import india from './image/india.jpg'
import america from './image/america.jpg'
import paris from './image/paris.jpg'
import germany from './image/germany.jpg'

function Header() {
  const data = [
    {
      title: 'London',
      subtitle: 'England',
      image: london,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },

    {
      title: 'India',
      subtitle: 'Delhi',
      image: india,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },

    {
      title: 'France',
      subtitle: 'Paris',
      image: paris,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },

    {
      title: 'Germany',
      subtitle: 'Berlin',
      image: germany,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },

    {
      title: 'America',
      subtitle: 'New York',
      image: america,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]

  return (
    <div className="container">
      {data.map((data, index) => (
        <Cards
          key={index}
          title={data.title}
          subtitle={data.subtitle}
          image={data.image}
          desc={data.description}
        />
      ))}
    </div>
  )
}

export default Header
