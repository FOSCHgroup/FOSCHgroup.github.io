interface Project {
  name: string;
  dates: string;
  organization: string;
}

interface Props {
  project: Project;
}

export default function Project({ project }: Props) {
  return (
    <li className="content">
      <div className="is-flex">
        <div className="has-text-weight-bold is-flex-grow-1">
          {project.name}
        </div>
        <p>{project.dates}</p>
      </div>
      <p>{project.organization}</p>
    </li>
  );
}
