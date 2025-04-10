import { useState } from "react";

const Agenda = () => {
  const [agendaData] = useState({
    day: {
      date: "April 17, 2025",
      location:
        "Auditorium, Thapar Institute of Engineering & Technology, Patiala",
      events: [
        { time: "10:00 AM - 11:00 AM", title: "Meet and Greet" },
        { time: "11:00 AM - 12:00 PM", title: "Inauguration" },
        { time: "12:00 PM - 12:30 PM", title: "High Tea" },
        {
          time: "12:30 PM - 01:15 PM",
          title: "Panel Discussion - I",
          details: [
            "Understanding Outcome-Based Learning:",
            "A Shift from Traditional Education",
          ],
        },
        {
          time: "01:15 PM - 02:00 PM",
          title: "Panel Discussion - II",
          details: [
            "From College to Corporate:",
            "How Skill-Based Learning Enhances Employability",
          ],
        },
        { time: "02:00 PM - 02:15 PM", title: "Valedictory Session" },
        { time: "02:30 PM - 03:00 PM", title: "Lunch" },
        { time: "03:00 PM - 03:30 PM", title: "Campus Tour" },
        {
          time: "03:30 PM",
          title: "Parting Tea",
        },
      ],
    },
  });

  if (!agendaData) {
    return (
      <>
        <p className='h-[50vh] flex justify-center items-center text-3xl'>
          Agenda data not available!
        </p>
      </>
    );
  }

  return (
    <div className='bg-neutral-50 py-28'>
      <div className='container mx-auto max-w-6xl px-5 md:px-20 text-center'>
        <h2 className='agenda-title text-6xl italic font-semibold text-red-700'>
          Agenda
        </h2>

        {/* Agenda Details */}
        <div className='mt-8 bg-white p-8 border border-gray-300 shadow-md rounded-lg'>
          <p className='font-medium text-red-600 text-2xl mt-1'>
            {agendaData.day.date}
          </p>
          <p className='text-black/60 mb-10'>{agendaData.day.location}</p>

          {/* Responsive Table Wrapper */}
          <div className='overflow-x-auto w-full'>
            <table className='w-full min-w-max text-left'>
              <tbody>
                {agendaData.day.events.map((event: any, index: number) => (
                  <tr
                    key={index}
                    className='border-b border-b-gray-300 hover:bg-slate-50'>
                    <td className='py-4 px-3 text-red-700 text-lg'>
                      {index + 1}
                    </td>
                    <td className='py-4 px-3'>
                      <p className='text-xl font-semibold'>{event.title}</p>
                      {event.details && Array.isArray(event.details) ? (
                        event.details.map((detail: string, idx: number) => (
                          <p key={idx} className='text-slate-500 font-medium'>
                            {detail}
                          </p>
                        ))
                      ) : (
                        <p className='text-slate-500 font-medium'>
                          {event.details}
                        </p>
                      )}
                    </td>
                    <td className='py-4 px-3 text-right text-red-700'>
                      {event.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
