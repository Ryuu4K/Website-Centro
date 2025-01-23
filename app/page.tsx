import React from 'react'
import ImageSlider from '../components/ImageSlider'
import Header from '../components/Header'
import BusinessDescription from '../components/BusinessDescription'
import VisiMisi from '../components/visimisi'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div 
        className="flex flex-col md:flex-row items-center justify-center py-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/cool-geometric-triangular-hallway-3d-rendering_181624-11762.jpg?t=st=1734430450~exp=1734434050~hmac=dc18007102473ba7fd05225a748512481eebf2e4740df173e89096a2dd4ff122&w=1480')",
        }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
          <ImageSlider />
          <Header />
        </div>
      </div>
      <BusinessDescription />
      <VisiMisi />
    </main>
  )
}

