
import "./CollectionList.css";

export default function CollectionList({ collections, handleSelectCollection }) {

  return (
    <ul className="collectionsGroup">
      {
        collections.map((collection) => (
          // TODO: sé que está mal lo del id dani
          <li key={collection.id}>
            <button onClick={() => handleSelectCollection(collection)}>
              {collection.name}
              
            </button>
          </li>
        ))
      }
    </ul>
  )
}