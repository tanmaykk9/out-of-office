import { HiOutlineKey, HiClock, HiWifi, HiOutlineLockOpen, HiOutlineTrash } from "react-icons/hi";

export const FindingsJson = [
    {
        label: 'Security',
        value: 'Keys are hanging in the garage near the back door.',
        icon: <HiOutlineKey size={50} />
    },
    {
        label: 'The Alarm Panel',
        value: 'The alarm panel is to your right when you enter the house through the front door. Disarm it by entering the code then pressing disarm.',
        icon: <HiClock size={50} />
    },
    {
        label: 'Wifi',
        value: 'Vacation.',
        otherValue: 'Out of Office',
        icon: <HiWifi size={50} />
    },
    {
        label: 'The locks ',
        value: 'To lock the front door, you must close the door, lift the handle up, then lock with the deadbolt (inside) or the key (outside).',
        icon: <HiOutlineLockOpen size={50} />
    },
    {
        label: 'Garbage ',
        value: 'Please put the bins out in the driveway next to the road Thursday evening and bring them back to the front of the house after pickup is complete.',
        icon: <HiOutlineTrash size={50} />
    },
]