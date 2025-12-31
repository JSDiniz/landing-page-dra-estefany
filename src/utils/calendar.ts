export function generateTimeSlots(
    start: string,
    end: string,
    intervalMinutes = 30
  ) {
    const slots: string[] = [];
  
    let [h, m] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);
  
    const current = new Date();
    current.setHours(h, m, 0, 0);
  
    const endTime = new Date();
    endTime.setHours(endH, endM, 0, 0);
  
    while (current < endTime) {
      slots.push(
        current.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      current.setMinutes(current.getMinutes() + intervalMinutes);
    }
  
    return slots;
  }

  
  export function isSlotBusy(
    date: string,
    time: string,
    events: any[]
  ) {
    const slotDate = new Date(`${date}T${time}:00`);
  
    return events.some(event => {
      const start = new Date(event.start);
      const end = new Date(event.end);
      return slotDate >= start && slotDate < end;
    });
  }
  