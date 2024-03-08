import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({icon, color, size, onClick=()=>{}}) {
  return (
    <FontAwesomeIcon icon={icon} color={color} onClick={onClick} style={{
        height: `${size}px`,
        width: `${size}px`
    }} />
  )
}
