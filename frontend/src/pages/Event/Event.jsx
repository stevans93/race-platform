import { format } from "date-fns";

const Event = ({ event }) => {
  return (
    <div className="w-[1024px]">
        <div>
          <div>
            {!event.banner ? (<img src={event.banner} alt={event.name} />) : (<div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg"></div>)}
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <h1 className="text-2xl font-semibold text-secondary">{event.name}</h1>
              {/* Mesto - Gtad */}
              <p>{format(new Date(event.date), 'dd MMMM yyyy HH:mm a')}</p>
              <span>EUR {event.price}</span>
            </div>
            <div className="flex gap-4">
              {!event.image ? (<img src={event.image} alt={event.image} />) : (<div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg"></div>)}
              {!event.image ? (<img src={event.image} alt={event.image} />) : (<div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg"></div>)}
              {/* Mapa */}
            </div>
          </div>
          <div className="mt-4 p-4">
            <p className="text-justify">{event.info}</p>
          </div>
        </div>
    </div>
  )
}

export default Event;
