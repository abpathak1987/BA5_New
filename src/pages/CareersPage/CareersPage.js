import React from 'react';
import MainContent from '../../components/MainContent/MainContent';
import './CareersPage.css';
import Header from '../../components/Header/header';
import SearchSection from '../../components/SearchSection/SearchSection';

const CareersPage = () => {
  return (
    <div className="careers-page">
      <Header />
      <MainContent />
      <SearchSection />
    </div>
  );
};

export default CareersPage;