
import CategoryBox from './CategoryBox'
import { categories } from './CategoriesData.js'
import ContainerLayout from '../../layouts/ContainerLayout.jsx';
const Categories = () => {
  return (
    <ContainerLayout>
      <div className='pt-4 flex items-center justify-between overflow-x-auto'>
        {categories.map(item => (
          <CategoryBox key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
    </ContainerLayout>
  )
}

export default Categories;