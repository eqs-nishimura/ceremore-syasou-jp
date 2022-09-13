export type Seminar = {
  id: string;
  seminarTitle: string;
  location: string;
  date: string; // yyyy-M-d (WWW)
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  receptionTime: string; // HH:mm
  capacity: number;
  free: boolean;
  contents: string[];
  price?: number;
  photoPath?: string;
  firstHalf?: boolean;
  secondHalf?: boolean;
  nextSeminarId?: string;
  prevSeminarId?: string;
  seminarType: boolean;
};

export const SEMINARS: Seminar[] = [
  {
    id: '221116',
    seminarTitle: '社葬・お別れの会・合同葬 成功のポイント「具体的準備と費用編」',
    location: 'セレモア 東京紀尾井町本社 セミナー会場(東京都千代田区紀尾井町3-12 紀尾井町ビル6F)',
    date: '2022-11-16 (水)',
    startTime: '15:00',
    endTime: '16:30',
    receptionTime: '14:30',
    capacity: 30,
    free: true,
    contents: ['社葬当日までの６つのステップ（具体的な準備～社葬当日・終了後）','社葬費用について'],
    photoPath: '/images/seminar/seminar_170614.jpg',
    firstHalf: false,
    secondHalf: true,
    nextSeminarId: '',
    prevSeminarId: '221026',
    seminarType: true,
  },
  {
    id: '221026',
    seminarTitle: '社葬・お別れの会・合同葬 成功のポイント「事前準備編」',
    location: 'セレモア 東京紀尾井町本社 セミナー会場(東京都千代田区紀尾井町3-12 紀尾井町ビル6F)',
    date: '2022-10-26 (水)',
    startTime: '15:00',
    endTime: '16:30',
    receptionTime: '14:30',
    capacity: 30,
    free: true,
    contents: ['社葬を行う３つの目的','社葬の形態','社葬当日までの６つのステップ（事前準備～社葬の告知まで）'],
    photoPath: '/images/seminar/seminar_170711.jpg',
    firstHalf: true,
    secondHalf: false,
    nextSeminarId: '221116',
    prevSeminarId: '',
    seminarType: true,
  },
  {
    id: '221006',
    seminarTitle: '社葬・お別れの会・合同葬 成功のポイント「具体的準備と費用編」',
    location: 'セレモア 東京紀尾井町本社 セミナー会場(東京都千代田区紀尾井町3-12 紀尾井町ビル6F)',
    date: '2022-10-6 (木)',
    startTime: '15:00',
    endTime: '16:30',
    receptionTime: '14:30',
    capacity: 30,
    free: true,
    contents: ['社葬当日までの６つのステップ（具体的な準備～社葬当日・終了後）','社葬費用について'],
    photoPath: '/images/seminar/seminar_170614.jpg',
    firstHalf: false,
    secondHalf: true,
    nextSeminarId: '',
    prevSeminarId: '220913',
    seminarType: true,
  },
  {
    id: '220913',
    seminarTitle: '社葬・お別れの会・合同葬 成功のポイント「事前準備編」',
    location: 'セレモア 東京紀尾井町本社 セミナー会場(東京都千代田区紀尾井町3-12 紀尾井町ビル6F)',
    date: '2022-9-13 (火)',
    startTime: '15:00',
    endTime: '16:30',
    receptionTime: '14:30',
    capacity: 30,
    free: true,
    contents: ['社葬を行う３つの目的','社葬の形態','社葬当日までの６つのステップ（事前準備～社葬の告知まで）'],
    photoPath: '/images/seminar/seminar_170711.jpg',
    firstHalf: true,
    secondHalf: false,
    nextSeminarId: '221006',
    prevSeminarId: '',
    seminarType: true,
  },
  {
    id: '220707',
    seminarTitle: '社葬・お別れの会・合同葬 成功のポイント「具体的準備と費用編」',
    location: 'セレモア 東京紀尾井町本社 / 常設セミナー会場(東京都千代田区紀尾井町3-12 紀尾井町ビル6F)',
    date: '2022-7-7 (木)',
    startTime: '15:00',
    endTime: '16:30',
    receptionTime: '14:30',
    capacity: 30,
    free: true,
    contents: ['社葬当日までの６つのステップ（具体的な準備～社葬当日・終了後）','社葬費用について'],
    photoPath: '/images/seminar/seminar_170614.jpg',
    firstHalf: false,
    secondHalf: true,
    nextSeminarId: '',
    prevSeminarId: '220623',
    seminarType: true,
  },
  {
    id: '220623',
    seminarTitle: '社葬・お別れの会・合同葬 成功のポイント「事前準備編」',
    location: 'セレモア 東京紀尾井町本社 / 常設セミナー会場(東京都千代田区紀尾井町3-12 紀尾井町ビル6F)',
    date: '2022-6-23 (木)',
    startTime: '15:00',
    endTime: '16:30',
    receptionTime: '14:30',
    capacity: 30,
    free: true,
    contents: ['社葬を行う３つの目的','社葬の形態','社葬当日までの６つのステップ（事前準備～社葬の告知まで）'],
    photoPath: '/images/seminar/seminar_170711.jpg',
    firstHalf: true,
    secondHalf: false,
    nextSeminarId: '220707',
    prevSeminarId: '',
    seminarType: true,
  },
  {
    id: '220608',
    seminarTitle: '社葬・お別れの会・合同葬 成功のポイント「具体的準備と費用編」',
    location: 'セレモア 東京紀尾井町本社 / 常設セミナー会場(東京都千代田区紀尾井町3-12 紀尾井町ビル6F)',
    date: '2022-6-8 (水)',
    startTime: '15:00',
    endTime: '16:30',
    receptionTime: '14:30',
    capacity: 30,
    free: true,
    contents: ['社葬当日までの６つのステップ（具体的な準備～社葬当日・終了後）','社葬費用について'],
    photoPath: '/images/seminar/seminar_170614.jpg',
    firstHalf: false,
    secondHalf: true,
    nextSeminarId: '',
    prevSeminarId: '220518',
    seminarType: true,
  },
  {
    id: '220518',
    seminarTitle: '社葬・お別れの会・合同葬 成功のポイント「事前準備編」',
    location: 'セレモア 東京紀尾井町本社 / 常設セミナー会場(東京都千代田区紀尾井町3-12 紀尾井町ビル6F)',
    date: '2022-5-18 (水)',
    startTime: '15:00',
    endTime: '16:30',
    receptionTime: '14:30',
    capacity: 30,
    free: true,
    contents: ['社葬を行う３つの目的','社葬の形態','社葬当日までの６つのステップ（事前準備～社葬の告知まで）'],
    photoPath: '/images/seminar/seminar_170711.jpg',
    firstHalf: true,
    secondHalf: false,
    nextSeminarId: '220608',
    prevSeminarId: '',
    seminarType: true,
  },
  {
    id: '220427',
    seminarTitle: '社葬・お別れの会・合同葬 成功のポイント「具体的準備と費用編」',
    location: 'セレモア 東京紀尾井町本社 / 常設セミナー会場(東京都千代田区紀尾井町3-12 紀尾井町ビル6F)',
    date: '2022-4-27 (水)',
    startTime: '15:00',
    endTime: '16:30',
    receptionTime: '14:30',
    capacity: 30,
    free: true,
    contents: ['社葬当日までの６つのステップ（具体的な準備～社葬当日・終了後）','社葬費用について'],
    photoPath: '/images/seminar/seminar_170614.jpg',
    firstHalf: false,
    secondHalf: true,
    nextSeminarId: '',
    prevSeminarId: '220414',
    seminarType: true,
  },
  {
    id: '220414',
    seminarTitle: '社葬・お別れの会・合同葬 成功のポイント「事前準備編」',
    location: 'セレモア 東京紀尾井町本社 / 常設セミナー会場(東京都千代田区紀尾井町3-12 紀尾井町ビル6F)',
    date: '2022-4-14 (木)',
    startTime: '15:00',
    endTime: '16:30',
    receptionTime: '14:30',
    capacity: 30,
    free: true,
    contents: ['社葬を行う３つの目的','社葬の形態','社葬当日までの６つのステップ（事前準備～社葬の告知まで）'],
    photoPath: '/images/seminar/seminar_170711.jpg',
    firstHalf: true,
    secondHalf: false,
    nextSeminarId: '220427',
    prevSeminarId: '',
    seminarType: true,
  },
];