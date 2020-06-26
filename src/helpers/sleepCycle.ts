export interface IRequest {
  hour: number;
  minute: number;
  period: string;
}

export interface IResponse {
  cycle: number;
  time: number;
  hours: number;
  suggested: boolean;
}

const NINETY_MINUTES = 1000 * 60 * 60 * 1.5;

export default function sleepCycle({
  hour,
  minute,
  period,
}: IRequest): IResponse[] {
  const hourConverted = (period === 'pm' ? hour + 12 : hour) % 24;
  const date = new Date(0, 0, 0, hourConverted, minute, 0);

  const cycles = [
    {
      cycle: 6,
      suggested: true,
    },
    {
      cycle: 5,
      suggested: true,
    },
    {
      cycle: 4,
      suggested: false,
    },
    {
      cycle: 3,
      suggested: false,
    },
  ];
  console.log(cycles);
  return cycles.map(({ cycle, suggested }) => {
    const time = new Date(date.getTime() - NINETY_MINUTES * cycle).getTime();
    return {
      cycle,
      suggested,
      time,
      hours: (date.getTime() - time) / (1000 * 60 * 60),
    };
  });
}
