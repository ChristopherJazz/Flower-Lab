
import './style.css';

import { initializeNavigation } from './components/navigation.js';
import { initializeProductCatalog } from './components/productCatalog.js';

// Initialize website navigation
initializeNavigation();

// Display products
initializeProductCatalog();

console.log('Fuzzy Flower Shop is running!');
