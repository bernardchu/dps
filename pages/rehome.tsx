import DpsRedirect from "../src/routing/DpsRedirect";
import { rehomeLink } from "../src/routing/routes";

export default function Rehome() {
  return <DpsRedirect to={rehomeLink} />
}
