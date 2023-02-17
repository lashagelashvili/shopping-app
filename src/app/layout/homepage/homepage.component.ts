import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  standalone: true,
  imports: [ComponentsModule],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
