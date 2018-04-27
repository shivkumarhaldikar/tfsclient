export class Defect {
  ID: string;
  Title: string;
  AssignedTo: string;
  State: string;
  Priority: string;
  Version: string;
  Comments: [Comment];
}

export class Comment {
   Date: string;
   User: string;
   Text: string;
}
