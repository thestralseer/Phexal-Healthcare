import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { QualityPage as QualityPageComponent } from '../components/compliance/QualityPage';

export const QualityPage: React.FC = () => {
 const location = useLocation();

 // Scroll to anchor section if hash is present in the URL
 useEffect(() => {
 if (location.hash) {
 const id = location.hash.replace('#', '');
 setTimeout(() => {
 const el = document.getElementById(id);
 if (el) {
 el.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }
 }, 150);
 } else {
 window.scrollTo({ top: 0, behavior: 'smooth' });
 }
 }, [location.hash]);

 return (
 <QualityPageComponent />
 );
};
