import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({icon, color, size}) {
  return (
    <FontAwesomeIcon icon={icon} color={color} style={{
        height: `${size}px`,
        width: `${size}px`
    }} />
  )
}
