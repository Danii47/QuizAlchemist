
import "./CollectionList.css";

export default function CollectionList({ collections, handleSelectCollection }) {


  return (
    <ul className="collectionsGroup">
      {
        collections.map((collection) => (
          // TODO: sé que está mal lo del id dani
          <li>
            <button key={collection.id} onClick={() => handleSelectCollection(collection)}>
              <div className="bandContainer" style={{ "borderColor": `${collection.color}` }}>
                {collection.name}
              </div>
            </button>
          </li>
        ))
      }
    </ul>
  )
}